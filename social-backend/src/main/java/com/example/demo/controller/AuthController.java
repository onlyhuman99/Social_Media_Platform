package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.EmailService;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepository;
    private final EmailService emailService;

    public AuthController(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    private String generateOtp() {
        int otp = 100000 + new Random().nextInt(900000);
        return String.valueOf(otp);
    }

    // Initiate signup: create/update user with OTP and send mail
    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signup(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();

        if (user.getEmail() == null || user.getEmail().isBlank()) {
            response.put("error", "Email is required");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        if (user.getUsername() == null || user.getUsername().isBlank()) {
            response.put("error", "Username is required");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        if (user.getPassword() == null || user.getPassword().isBlank()) {
            response.put("error", "Password is required");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            response.put("error", "Username already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        var existingOpt = userRepository.findByEmail(user.getEmail());
        if (existingOpt.isPresent()) {
            response.put("error", "Email already registered");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        try {
            User toSave = new User();
            toSave.setEmail(user.getEmail());
            toSave.setUsername(user.getUsername());
            toSave.setPassword(user.getPassword());
            toSave.setDob(user.getDob());
            toSave.setVerified(true);
            userRepository.save(toSave);

            response.put("message", "Signup successful");
            response.put("userId", toSave.getId());
            return ResponseEntity.ok(response);
        } catch (DataIntegrityViolationException ex) {
            response.put("error", "Invalid data or duplicate user");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception ex) {
            response.put("error", "Unexpected error: " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // Verify OTP and finalize signup
    // verify-otp removed

    // login: block unverified users
    @PostMapping("/login")
    public User login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");
        return userRepository.findByUsername(username)
                .filter(u -> u.getPassword().equals(password))
                .orElse(null);
    }
}

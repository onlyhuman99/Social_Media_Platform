package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    public void sendOtpEmail(String to, String otp) {
        if (mailSender == null) {
            System.out.println("[WARN] Mail sender not configured. OTP for " + to + ": " + otp);
            return;
        }
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject("Your Voxora OTP");
            message.setText("Your OTP is: " + otp + "\nIt expires in 10 minutes.");
            mailSender.send(message);
        } catch (MailException ex) {
            System.out.println("[ERROR] Failed to send OTP email: " + ex.getMessage());
        }
    }
}





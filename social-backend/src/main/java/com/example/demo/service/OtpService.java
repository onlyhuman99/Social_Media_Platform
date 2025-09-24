package com.example.demo.service;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

	public static class PendingUserData {
		public String username;
		public String email;
		public String password;
		public String dob;
	}

	private static class OtpRecord {
		String otp;
		LocalDateTime expiresAt;
		PendingUserData pendingUserData;
	}

	private final Map<String, OtpRecord> emailToOtp = new ConcurrentHashMap<>();

	public void put(String email, String otp, LocalDateTime expiresAt, PendingUserData data) {
		OtpRecord record = new OtpRecord();
		record.otp = otp;
		record.expiresAt = expiresAt;
		record.pendingUserData = data;
		emailToOtp.put(email, record);
	}

	public PendingUserData consumeIfValid(String email, String otp) {
		OtpRecord record = emailToOtp.get(email);
		if (record == null) return null;
		if (!record.otp.equals(otp)) return null;
		if (record.expiresAt.isBefore(LocalDateTime.now())) return null;
		emailToOtp.remove(email);
		return record.pendingUserData;
	}
}





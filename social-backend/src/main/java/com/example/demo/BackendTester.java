package com.example.demo;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class BackendTester {

    private static final String BASE_URL = "http://localhost:8080/users"; // your endpoint

    public static void main(String[] args) throws Exception {
        // 1. Create a user
        String createJson = "{\"username\": \"parth\", \"password\": \"1234\"}";
        sendRequest("POST", BASE_URL, createJson);

        // 2. Get all users
        sendRequest("GET", BASE_URL, null);

        // 3. Delete a user by ID (replace 1 with actual ID)
        sendRequest("DELETE", BASE_URL + "/1", null);
    }

    private static void sendRequest(String method, String urlStr, String jsonInput) throws Exception {
        URL url = new URL(urlStr);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod(method);
        con.setRequestProperty("Content-Type", "application/json");
        con.setDoOutput(jsonInput != null);

        if (jsonInput != null) {
            try (OutputStream os = con.getOutputStream()) {
                byte[] input = jsonInput.getBytes("utf-8");
                os.write(input, 0, input.length);
            }
        }

        int code = con.getResponseCode();
        System.out.println(method + " " + urlStr + " -> Response code: " + code);

        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(con.getInputStream(), "utf-8"))) {
            StringBuilder response = new StringBuilder();
            String responseLine;
            while ((responseLine = br.readLine()) != null) {
                response.append(responseLine.trim());
            }
            if (!response.isEmpty()) {
                System.out.println("Response: " + response);
            }
        } catch (IOException e) {
            System.out.println("No response body (maybe for DELETE)");
        }
    }
}

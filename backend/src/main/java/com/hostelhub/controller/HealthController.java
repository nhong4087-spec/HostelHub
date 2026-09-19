package com.hostelhub.controller;

import com.hostelhub.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Endpoint kiem tra tinh trang server.
 * Muc dich o B0: xac nhan backend chay va frontend goi duoc qua CORS.
 */
@RestController
@RequestMapping("/api")
@Tag(name = "Health", description = "Kiem tra tinh trang hoat dong cua server")
public class HealthController {

    @Value("${spring.application.name}")
    private String applicationName;

    @Value("${app.version}")
    private String version;

    @GetMapping("/health")
    @Operation(summary = "Kiem tra server", description = "Tra ve trang thai hoat dong cua HostelHub Backend")
    public ResponseEntity<ApiResponse<Map<String, Object>>> health() {
        Map<String, Object> data = new LinkedHashMap<>();
        data.put("service", applicationName);
        data.put("status", "UP");
        data.put("version", version);
        data.put("timestamp", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));

        return ResponseEntity.ok(ApiResponse.success("HostelHub Backend dang hoat dong", data));
    }
}

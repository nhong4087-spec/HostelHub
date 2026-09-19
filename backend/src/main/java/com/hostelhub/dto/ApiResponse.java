package com.hostelhub.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Khung phan hoi chung cho toan bo REST API cua HostelHub.
 * Moi endpoint deu tra ve dang { success, message, data }
 * de frontend xu ly thanh cong / loi theo mot cach duy nhat.
 */
@Getter
@AllArgsConstructor
public class ApiResponse<T> {

    private boolean success;
    private String message;
    private T data;

    public static <T> ApiResponse<T> success(String message, T data) {
        return new ApiResponse<>(true, message, data);
    }

    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, message, null);
    }
}

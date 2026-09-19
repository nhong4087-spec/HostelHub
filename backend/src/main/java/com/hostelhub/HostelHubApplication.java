package com.hostelhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

/**
 * Diem khoi dong cua HostelHub Backend.
 *
 * B0 (project-setup): ung dung chay doc lap, KHONG can MySQL.
 * Hai auto-configuration cua database duoc tat de server len duoc
 * ngay ca khi chua tao schema.
 *
 * B1 (database-schema): XOA thuoc tinh "exclude" ben duoi de bat lai
 * DataSource + JPA, dong thoi mo phan spring.datasource trong application.yml.
 */
@SpringBootApplication(exclude = {
        DataSourceAutoConfiguration.class,
        HibernateJpaAutoConfiguration.class
})
public class HostelHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(HostelHubApplication.class, args);
    }
}

package com.restosync.comandas.dto.response;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.Page;
 
import java.util.List;
 
/**
 * Envoltorio estándar para respuestas paginadas.
 *
 * {
 *   "content": [ ... ],
 *   "page": 0,
 *   "size": 10,
 *   "totalElements": 45,
 *   "totalPages": 5,
 *   "first": true,
 *   "last": false
 * }
 */
@Data
@Builder
public class PagedResponse<T> {
 
    private List<T> content;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
    private boolean first;
    private boolean last;
 
    public static <T> PagedResponse<T> from(Page<T> page) {
        return PagedResponse.<T>builder()
                .content(page.getContent())
                .page(page.getNumber())
                .size(page.getSize())
                .totalElements(page.getTotalElements())
                .totalPages(page.getTotalPages())
                .first(page.isFirst())
                .last(page.isLast())
                .build();
    }
}
 
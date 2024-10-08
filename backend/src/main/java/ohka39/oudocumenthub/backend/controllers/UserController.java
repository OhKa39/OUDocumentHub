package ohka39.oudocumenthub.backend.controllers;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import ohka39.oudocumenthub.backend.models.User;
import ohka39.oudocumenthub.backend.payload.DTO.ResponseDTO;
import ohka39.oudocumenthub.backend.payload.DTO.UserDTO;
import ohka39.oudocumenthub.backend.payload.requests.EditNameRequest;
import ohka39.oudocumenthub.backend.services.IUserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/${api-route}/user")
@Slf4j
public class UserController {

    private final IUserService userService;

    @GetMapping
    public ResponseEntity<ResponseDTO> getCurrentUser(Authentication auth) {
        UserDTO userResponse = auth.getPrincipal() instanceof DefaultOAuth2User
                ? userService.getUserById(((DefaultOAuth2User) auth.getPrincipal()).getName())
                : userService
                        .getUserById(((User) auth.getPrincipal()).getUserId().toString());
        ResponseDTO response = new ResponseDTO("success", HttpStatus.OK.value(), userResponse,
                "retrieve user successfully");
        return ResponseEntity.ok().body(response);
    }

    @PatchMapping("/edit-name")
    public ResponseEntity<ResponseDTO> editName(@RequestBody @Valid EditNameRequest request, Authentication auth) {
        UserDTO userResponse = userService.setNameById(((User) auth.getPrincipal()).getUserId().toString(), request);

        ResponseDTO response = new ResponseDTO("success", HttpStatus.OK.value(), userResponse,
                "update user name successfully");
        return ResponseEntity.ok().body(response);
    }

    @PatchMapping("/edit-avatar")
    public ResponseEntity<ResponseDTO> editAvatar(@RequestParam("file") MultipartFile file, Authentication auth)
            throws IOException {
        if (file.isEmpty()) {
            ResponseDTO response = new ResponseDTO("failed", HttpStatus.BAD_REQUEST.value(), null,
                    "update avatar failure");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        UserDTO userResponse = userService.setAvatarById(((User) auth.getPrincipal()).getUserId().toString(), file);

        ResponseDTO response = new ResponseDTO("success", HttpStatus.OK.value(), userResponse,
                "update user name successfully");
        return ResponseEntity.ok().body(response);
    }
}

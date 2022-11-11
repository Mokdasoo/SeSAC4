package csesacspringstudy2.sesacspringstudy2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
public class loginController {

    @GetMapping("login")
    public String getLogin(Model model){
       boolean islogin = false;
       int a = islogin? 1 : 2;
       model.addAttribute("text", islogin? 'a':'b');
        return "login";
    }

}

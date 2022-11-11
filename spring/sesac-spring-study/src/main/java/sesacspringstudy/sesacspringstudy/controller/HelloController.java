package sesacspringstudy.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    @GetMapping("hi")
    public String getHi(Model model){
        model.addAttribute("text", "모델에 포함시켜 보낸 내용입니다");
        return "hi";
    }
    @GetMapping("hello")
    public String getHello(){
        return "hello";
    }
}

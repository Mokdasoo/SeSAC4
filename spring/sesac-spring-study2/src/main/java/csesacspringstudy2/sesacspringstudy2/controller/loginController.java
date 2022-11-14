package csesacspringstudy2.sesacspringstudy2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@Controller
public class loginController {

    @GetMapping("login")
    public String getLogin(Model model){
       boolean islogin = false;
       int[] numArray = {10, 30};
       model.addAttribute("text", islogin? 'a':'b');
       model.addAttribute("utext", "<strong>utext</strong>");
       String[] names = {"kim", "lee", "park"};
       model.addAttribute("names", names);
       model.addAttribute("age", numArray);
       return "login";
    }

    class Person{
        private String name;
        private int age;
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }


        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }
    @GetMapping("people")
    public String getPeople(Model model){
        ArrayList<Person> personArray = new ArrayList<>();
        personArray.add(new Person("kim", 20));
        personArray.add(new Person("lee", 30));
        personArray.add(new Person("park", 10));
        personArray.add(new Person("hong", 40));
        model.addAttribute("personArray", personArray);

        return "people";
    }
    @GetMapping("api")
    public String getApi(@RequestParam(value = "name", required = false) String n, Model model){
        model.addAttribute("name", n);
        return "api";
    }
    @GetMapping("api/{n}")
    public String getApi2(@PathVariable("n") String name, Model model){
        model.addAttribute("name", name);
        return "api";
    }
    @GetMapping("introduce/{name}")
    public String getName(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "introduce";
    }
    @GetMapping("introduce")
    public String getName2(@RequestParam(value = "name", required = false) String n, @RequestParam int age, Model model){
        model.addAttribute("name", n);
        model.addAttribute("age", age);
        return "introduce";
    }
    @GetMapping("mvc-post")
    public String getMVC(){
        return "API-post";
    }
    @PostMapping("mvc-post")
    public String postMVC(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "gender", required = false) String gender,
            @RequestParam(value = "birth", required = false) String birth,
            @RequestParam(value = "hobby", required = false) String hobby,
            Model model){

        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("birth", birth);
        model.addAttribute("hobby", hobby);
        return "api";
    }


}

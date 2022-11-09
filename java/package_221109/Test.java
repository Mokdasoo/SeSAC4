package package_221109;

public class Test {

    public String name;
    public int age;

    public Test(String str, int num){
        this.name = str;
        this.age = num;
    }
    public void sayHello(){
        System.out.println("Hello my name is "+ this.name);
        System.out.println("my age is "+ this.age);
    }

}

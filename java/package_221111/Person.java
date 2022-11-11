package package_221111;

public abstract class Person {
    private  int age;
    private  String name;

    public abstract void  printName();

//    public Person(){} 생략가능 but 매개변수 받는다면 서브클래스 생성자 첫줄에 super(변수); 로 받아줘야 함
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

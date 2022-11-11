package package_221111;

public class Kim extends Student{

    public Kim(String name, String school, int age, int studentNumber){
        super(name, school, age, studentNumber);
    }
    @Override
    public void todo() {
        System.out.println("점심은 김가네 김밥");
    }
}

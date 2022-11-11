package package_221111;

public class Main {
    public static void main(String[] args) {
        Kim kim1 = new Kim("동근", "코딩온", 15, 202219294);
        Baek baek1 = new Baek("동군", "코딩온", 19, 201813224);

        System.out.println("이름: " + kim1.getName() + " 학교: " +  kim1.getSchool() + " 나이: " +  kim1.getAge() + " 학번: " + kim1.getStudentNumber());
        System.out.print("할일: ");
        kim1.todo();
        System.out.println("이름: " + baek1.getName() + " 학교: " +  baek1.getSchool() + " 나이: " +  baek1.getAge() + " 학번: " + baek1.getStudentNumber());
        System.out.print("할일: ");
        baek1.todo();
    }
}

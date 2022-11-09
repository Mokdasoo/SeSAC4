package package_221109;

import java.util.InputMismatchException;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Test human = new Test("이동근", 28);
        human.sayHello();
        System.out.println(human.name + human.age);









//        System.out.println("숫자를 입력해주세요");
//
//        int num = 0;
//
//        try {
//            num = scanner.nextInt();
//            System.out.println("숫자 " + num);
//        }
//        catch(InputMismatchException e){
//            System.out.println("숫자가 아닙니다");
//        }
//
//        scanner.close();

//        int num1 = 5;
//        int num2 = 0;
//
//        try {
//            System.out.println(num1/num2);
//        }
//        catch(ArithmeticException e){
//            System.out.println("0으로 나눌 수 없습니다!!!");
//        }
//        finally {
//            System.out.println("finally");
//        }
//        System.out.println("예외 처리 성공");

    }
}

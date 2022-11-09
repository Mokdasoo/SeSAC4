package package_221107;

import java.util.ArrayList;
import java.util.Scanner;

public class Exam3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);




        //배열 실습
//        System.out.println("5개의 정수를 입력하세요");
//        int[] numArray = new int[5];
//        int sum = 0;
//        for (int i = 0; i < 5; i++) {
//            numArray[i] = scanner.nextInt();
//            sum += numArray[i];
//        }
//        System.out.println("평균은 " + ((double) sum/5));

        ArrayList<String> strings= new ArrayList<>();

        while (true){
            System.out.println("문자를 입력해주세요. : ");
            String str = scanner.next();
            if(str.equals("exit")) break;
            strings.add(str);
        }
        for (String value: strings) {
            System.out.println(value);
        }

    }
}

package package_221107;
import java.util.Scanner;

public class Exam2 {

	public static void calculate(int num1, int num2) {
		System.out.println("덧셈 결과 : " + ((double)num1 + num2));
		System.out.println("뺄셈 결과 : " + ((double)num1 - num2));
		System.out.println("나눗셈 결과 : " + ((double)num1 / num2));
		System.out.println("곱셈 결과 : " + ((double)num1 * num2));
	}
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//조건문 실습1
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		if(age <= 0) System.out.println("1이상의 숫자를 입력하세요");
//		else if(age <= 7) System.out.println("유아");
//		else if(age <= 13) System.out.println("초등학생");
//		else if(age <= 16) System.out.println("중학생");
//		else if(age <= 19) System.out.println("고등학생");
//		else System.out.println("성인");
//		scanner.close();
		
		
		//조건문 실습2
//		System.out.println("이름을 입력하세요");
//		String name = scanner.next();
//		if(name.equals("홍길동")) System.out.println("남자");
//		else if(name.equals("성춘향")) System.out.println("여자");
//		else System.out.println("모르겠어요.");
//		scanner.close();
		
		
		
		//반복문 실습
//		System.out.println("숫자를 입력하세요.");
//		int num = scanner.nextInt();
//		if(num > 0) {
//			for(int i = 1; i <= num; i++) {
//				System.out.print(i+ " ");
//			}
//		}
//		else {
//			System.out.print("0이상의 숫자를 입력해주세요");
//		}
//		scanner.close();
		
		
		//메소드 실습
		System.out.println("숫자 두 개를 입력하세요");
		int num1 = scanner.nextInt();
		int num2 = scanner.nextInt();
		calculate(num1, num2);
		scanner.close();
		
		
	}

}

package package_221109;

import java.util.ArrayList;
import java.util.Scanner;

public class Exam2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayList<Rectangle> rects = new ArrayList<>();

        while (true){
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력");
            int width = scanner.nextInt();
            int height = scanner.nextInt();
            if(width == 0 && height == 0) break;
            rects.add(new Rectangle(width));
            rects.get(rects.size()-1).setHeight(height);
        }
        for (Rectangle rect:rects) {
            System.out.println("가로 길이는: "+ rect.getWidth());
            System.out.println("세로 길이는: "+ rect.getHeight());
            System.out.println("넓이는: "+ rect.area());
            System.out.println("------------------------");
        }
//        System.out.println("Rectangle 인스턴스의 개수는: " + rects.size());
        System.out.println("Rectangle 인스턴스의 개수는: " + Rectangle.getCount());
    }
}

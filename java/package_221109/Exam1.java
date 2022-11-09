package package_221109;
//예외처리 실습
public class Exam1 {
    public static void main(String[] args) {
        int[] numArray = {1, 2, 3, 4};


        for(int i = 0; i < 5; i++){
            try{
                System.out.println(numArray[i]);
            }
            catch (ArrayIndexOutOfBoundsException e){
                System.out.println("인덱스가 범위를 벗어났습니다.");
            }
        }

    }
}

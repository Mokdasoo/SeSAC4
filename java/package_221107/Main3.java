package package_221107;

import java.util.Arrays;
import java.util.ArrayList;

public class Main3 {
    public static void main(String[] args) {
        int [] intArray = new int[2];



        intArray[0] = 1;
        intArray[1] = 2;

        int[] intArray2 = {1, 2};

        System.out.println("나는 "+ intArray2[0] +"등이다.");

        for (int i = 0; i < intArray2.length; i++) {
            System.out.println(intArray2[i]);
        }

        //foreach문
        for (int value : intArray2 ) {
            System.out.println(value);
        }

        System.out.println(Arrays.toString(intArray));

        ArrayList<Integer> arrayList1 = new ArrayList<>();
        ArrayList<Integer> arrayList2 = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            arrayList2.add(i);
        }
//        ArrayList<Double> arrayList2 = new ArrayList<>();
//        ArrayList<String> arrayList3 = new ArrayList<>();

        arrayList1.add(1);
        arrayList1.add(2);
        arrayList1.add(0,3);
        // [3, 1, 2]
        arrayList1.addAll(arrayList2);
        //[3,1,2,0,1,2,3,...,9]
        for (int value : arrayList1){
            System.out.print(value + " ");
        }

        arrayList1.remove(2);


        System.out.println("\n" +arrayList1.size());
        for (int i = 0; i < arrayList1.size(); i++) {
            System.out.print(arrayList1.get(i) + " ");
        }
        System.out.println("\n" + arrayList1.indexOf(9));
        arrayList1.clear();
        System.out.println("\n" +arrayList1.size());
        for (int value : arrayList1){
            System.out.print(value + " ");
        }
    }
}

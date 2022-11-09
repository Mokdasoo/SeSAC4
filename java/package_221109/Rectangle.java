package package_221109;

public class Rectangle {
    private int width;
    private int height;
    private static int count = 0;
    public static int getCount() {
        return count;
    }

    public Rectangle(int w){
        this.width = w;
        count++;
    }
    public int getWidth(){
        return width;
    }
    public int getHeight(){
        return  height;
    }
    public void  setWidth(int w){
        this.width = w;
    }
    public void  setHeight(int h){
        this.height = h;
    }


    public int area(){
        return this.width * this.height;
    }
}

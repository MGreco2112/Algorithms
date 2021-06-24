import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        
        int scanInt = scan.nextInt();
        scan.nextLine();
        
        
        for (int i = 0; i < scanInt; i++) {
            String scanOne = scan.nextLine();
            
            char[] one = scanOne.toCharArray();
            
            String finishedOne = "";
            
            String finishedTwo = "";
            
            for (int j = 0; j < scanOne.length(); j++) {
                
                if (j % 2 == 0) {
                    finishedOne += one[j];
                } else {
                    finishedTwo += one[j];
                }
                
            }
            
            System.out.println(finishedOne + " " + finishedTwo);
        
        }
        
        
        
    }
}

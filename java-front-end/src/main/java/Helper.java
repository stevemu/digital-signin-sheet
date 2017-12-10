import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import javafx.concurrent.Task;
import models.Login;
import models.Record;

public class Helper {
//    static String base = "https://online-sign-in-sheet.herokuapp.com";
    static String base = "https://online-sign-in-sheet.stevemu.com";


    static void postRecordToBackend(Record record) throws Exception {
        HttpResponse<JsonNode> jsonResponse = Unirest.post(base + "/api/records")
                .header("accept", "application/json")
                .header("Content-Type", "application/json")
                .body(record)
                .asJson();

        System.out.println(jsonResponse.getStatus());
//        models.Record back = jsonResponse.getBody();
//        System.out.println(back.name);

    }

    static boolean login(String org, String password) throws Exception {

//        String base = "http://localhost:3001";
//        String base = "https://online-sign-in-sheet.stevemu.com";

        Login login = new Login();
        login.username = org;
        login.password = password;

        HttpResponse<JsonNode> jsonResponse = Unirest.post(base + "/api/user/login")
                .header("accept", "application/json")
                .header("Content-Type", "application/json")
                .body(login)
                .asJson();

        if (jsonResponse.getStatus() == 200) {
            return true;
        } else {
            return false;
        }

//        System.out.println(jsonResponse.getBody().getObject().getString("message"));

//        if (username.equals("1") && password.equals("1")) {
//            return true;
//        }
//        return false;

//        return false;
    }



}

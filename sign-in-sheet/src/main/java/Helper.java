import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import javafx.concurrent.Task;
import models.Login;
import models.Record;

public class Helper {
//    static String base = "https://online-sign-in-sheet.stevemu.com";
    static String base = "http://localhost:3001";
    public static String token = null;


    static void postRecordToBackend(Record record) throws Exception {
        HttpResponse<JsonNode> jsonResponse = Unirest.post(base + "/api/records")
                .header("accept", "application/json")
                .header("Content-Type", "application/json")
                .header("authorization", token)
                .body(record)
                .asJson();

        if (jsonResponse.getStatus() != 200) {
            throw new Exception(jsonResponse.getStatusText());
        }
//        System.out.println(jsonResponse.getStatus());
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
            token = jsonResponse.getBody().getObject().getString("token");
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

import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import models.Record;
import java.io.IOException;
import java.util.*;
import javafx.animation.PauseTransition;
import javafx.util.Duration;

public class SignInSheetController {

    private String username;

    public void setUsername(String username) {
        this.username = username;
    }

    @FXML
    private Button goBackButton;

    @FXML
    private Label message;

    @FXML
    private TextField phoneField;

    @FXML
    private TextField nameField;

    @FXML
    private TextField emailField;

    @FXML
    private void handleGoBack(ActionEvent e) throws IOException {
        System.out.println("go back");

        Stage stage = (Stage)goBackButton.getScene().getWindow();
        Parent root = FXMLLoader.load(getClass().getResource("Login.fxml"));

        Scene scene = new Scene(root);
        stage.setScene(scene);
        stage.show();
    }

    @FXML
    private void handleSubmit(ActionEvent e) throws Exception {
//        username = "1"; // testing
//        message.setStyle("-fx-text-fill: black");


        if (username == null) {
            throw new Exception("username cann't be null");
        }

        String phone = phoneField.getText();
        String name = nameField.getText();
        String email = emailField.getText();

        if (phone.isEmpty() || name.isEmpty() || email.isEmpty()) {
            message.setStyle("-fx-text-fill: red");
            message.setText("Please fill out all fields.");
            return;
        } else {
            message.setStyle("-fx-text-fill: black");

        }

//        System.out.println(name);
//        System.out.println(email);
//        System.out.println(phone);
//        System.out.println(username);

        Record record = new Record();
        record.phone = phone;
        record.name = name;
        record.email = email;
        record.username = username;

        try {

            Helper.postRecordToBackend(record);

            phoneField.setText("");
            nameField.setText("");
            emailField.setText("");

            message.setText("Thank you for signing in. Please enjoy the event!");

            // solution reference: https://stackoverflow.com/questions/9966136/javafx-periodic-background-task
            PauseTransition wait = new PauseTransition(Duration.seconds(2));
            wait.setOnFinished((event) -> {
                message.setText("");

            });
            wait.play();

//
//            Timer timer = new Timer();
//            TimerTask task = new TimerTask() {
//                public void run() {
//                    message.setText("");
//
//                }
//            };
//
//            timer.schedule(task, 2000);


        } catch (Exception exp) {
            message.setText("Error: " + exp.getMessage());

        }





//        Platform.runLater(new Runnable() {
//            @Override
//            public void run() {
////                message.setText("");
//
//            }
//        });

//        Platform.setImplicitExit(false);
//        Timer timer = new Timer();
//        timer.schedule(new TimerTask() {
//
//            public void run() {
//                message.setText("");
//
//            }
//        }, 1000);
//

    }

}

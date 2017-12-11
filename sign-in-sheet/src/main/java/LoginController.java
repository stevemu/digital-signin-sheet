import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.stage.Stage;
import javafx.stage.StageStyle;

import java.io.IOException;

public class LoginController {
    @FXML
    private Label messageLabel;

    @FXML
    private TextField idField;

    @FXML
    private PasswordField passwordField;

    @FXML
    private Button submitButton;

    @FXML
    private void handleSubmitButtonAction(ActionEvent e) throws Exception {
        System.out.println(e);

        messageLabel.setText("Sign in button pressed");

        String id = idField.getText();
        String password = passwordField.getText();

        if (Helper.login(id, password)) {
            goToSignInSheetScreen();
        } else {
            messageLabel.setText("Wrong credential entered.");
        }

    }

    private void goToSignInSheetScreen() throws IOException  {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("SignInSheet.fxml"));

        Stage stage = (Stage)submitButton.getScene().getWindow();
        Parent root = loader.load();
        SignInSheetController controller = loader.getController();
        controller.setUsername(idField.getText());

        Scene scene = new Scene(root);
        stage.setScene(scene);
        stage.show();
    }

}

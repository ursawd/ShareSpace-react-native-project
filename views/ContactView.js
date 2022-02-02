import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { Formik } from "formik";
import gStyles from "../gStyles";

const sendDataToEmailApi = values => {
	Alert.alert(
		"Send Email?",
		`
		First Name: 
				${values.firstName}
		Last Name: 
				${values.lastName}
		Email: 
				${values.email}
		Tell us about yourself:
				${values.tellus}
		How did you hear about us?:
				${values.howhear}
		What type membership interests you?:
				${values.typeMembership}
	`
	);
	return true;
};

export default function ContactView({ navigation }) {
	return (
		<View>
			<View style={{ backgroundColor: "gold", alignItems: "center" }}>
				<Text style={{ fontSize: 24, marginVertical: 15 }}>
					WE CAN'T WAIT TO MEET YOU
				</Text>
				<Text style={{ padding: 15 }}>
					Every membership at ShareSpace begins with a tour of the space and a
					conversation with one of our Community Managers.
				</Text>
				<Text>management@workatfellow.com</Text>
				<Text style={{ paddingVertical: 10 }}>(508)555-3099</Text>
			</View>
			<Text style={{ color: "teal", fontSize: 20, padding: 10 }}>
				CONTACT TEAM SHARESPACE
			</Text>
			<View style={{ backgroundColor: "#eee" }}>
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: "",
						tellus: "",
						howhear: "",
						typeMembership: "",
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						const emailWasSent = sendDataToEmailApi(values);
						if (emailWasSent) {
							resetForm();
							setSubmitting(false);
						}
					}}
				>
					{props => (
						<View>
							<TextInput
								style={styles.input}
								placeholder="First Name*"
								onChangeText={props.handleChange("firstName")}
								value={props.values.firstName}
							/>

							<TextInput
								style={styles.input}
								placeholder="Last Name*"
								onChangeText={props.handleChange("lastName")}
								value={props.values.lastName}
							/>

							<TextInput
								style={styles.input}
								placeholder="Email*"
								onChangeText={props.handleChange("email")}
								value={props.values.email}
							/>

							<TextInput
								style={styles.input}
								multiline
								placeholder="Tell us about yourself"
								onChangeText={props.handleChange("tellus")}
								value={props.values.tellus}
							/>

							<TextInput
								style={styles.input}
								multiline
								placeholder="How did you hear about us?"
								onChangeText={props.handleChange("howhear")}
								value={props.values.howhear}
							/>

							<TextInput
								style={styles.input}
								placeholder="What type membership interests you?"
								onChangeText={props.handleChange("typeMembership")}
								value={props.values.typeMembership}
							/>
							<Button title="Submit" onPress={props.handleSubmit} />
						</View>
					)}
				</Formik>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "rgba(0,0,0,.1)",
		padding: 5,
		margin: 10,
	},
});

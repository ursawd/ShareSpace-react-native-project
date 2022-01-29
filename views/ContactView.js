import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Formik } from "formik";

export default function ContactView({ navigation }) {
	return (
		<View>
			<View>
				<Text>WE CAN'T WAIT TO MEET YOU</Text>
				<Text>
					Every membership at Fellow begins with a tour of the space and a
					conversation with one of our Community Managers.
				</Text>
				<Text>management@workatfellow.com</Text>
				<Text>(508)555-3099</Text>
				<Text>CONTACT TEAM FELLOW</Text>
			</View>
			<View>
				<Formik
					initialValues={{
						firstName: "",
						lastName: "",
						email: "",
						tellus: "",
						howhear: "",
						typeMembership: "",
					}}
					onSubmit={values => {
						console.log(JSON.stringify(values));
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
								placeholder="Do you know what membership you are interest in?"
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

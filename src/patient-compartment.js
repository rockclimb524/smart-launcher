module.exports = {
	"r2": {
		Account: "subject",
		AllergyIntolerance: "patient",
		Appointment: "actor",
		AppointmentResponse: "actor",
		AuditEvent: "patient",
		Basic: "patient",
		BodySite: "patient",
		CarePlan: "patient",
		Claim: "patient",
		ClinicalImpression: "patient",
		Communication: "subject",
		CommunicationRequest: "subject",
		Composition: "subject",
		Condition: "patient",
		DetectedIssue: "patient",
		DeviceUseRequest: "subject",
		DeviceUseStatement: "subject",
		DiagnosticOrder: "subject",
		DiagnosticReport: "subject",
		DocumentManifest: "subject",
		DocumentReference: "subject",
		Encounter: "patient",
		EnrollmentRequest: "subject",
		EpisodeOfCare: "patient",
		FamilyMemberHistory: "patient",
		Flag: "patient",
		Goal: "patient",
		Group: "member",
		ImagingObjectSelection: "patient",
		ImagingStudy: "patient",
		Immunization: "patient",
		ImmunizationRecommendation: "patient",
		List: "subject",
		Media: "subject",
		MedicationAdministration: "patient",
		MedicationDispense: "patient",
		MedicationOrder: "patient",
		MedicationStatement: "patient",
		NutritionOrder: "patient",
		Observation: "subject",
		Order: "subject",
		Patient: "_id",
		Person: "patient",
		Procedure: "patient",
		ProcedureRequest: "subject",
		Provenance: "patient",
		QuestionnaireResponse: "subject",
		ReferralRequest: "patient",
		RelatedPerson: "patient",
		RiskAssessment: "subject",
		Schedule: "actor",
		Specimen: "subject",
		SupplyDelivery: "patient",
		SupplyRequest: "patient",
		VisionPrescription: "patient"		
	},
	"r3": {
		Account: "subject",
		AdverseEvent: "subject",
		AllergyIntolerance: "patient",
		Appointment: "actor",
		AppointmentResponse: "actor",
		AuditEvent: "patient",
		Basic: "patient",
		BodySite: "patient",
		CarePlan: "patient",
		CareTeam: "patient",
		ChargeItem: "subject",
		Claim: "patient",
		ClaimResponse: "patient",
		ClinicalImpression: "subject",
		Communication: "subject",
		CommunicationRequest: "subject",
		Composition: "subject",
		Condition: "patient",
		Consent: "patient",
		Coverage: "policy-holder",
		DetectedIssue: "patient",
		DeviceRequest: "subject",
		DeviceUseStatement: "subject",
		DiagnosticReport: "subject",
		DocumentManifest: "subject",
		DocumentReference: "subject",
		EligibilityRequest: "patient",
		Encounter: "patient",
		EnrollmentRequest: "subject",
		EpisodeOfCare: "patient",
		ExplanationOfBenefit: "patient",
		FamilyMemberHistory: "patient",
		Flag: "patient",
		Goal: "patient",
		Group: "member",
		ImagingManifest: "patient",
		ImagingStudy: "patient",
		Immunization: "patient",
		ImmunizationRecommendation: "patient",
		List: "subject",
		MeasureReport: "patient",
		Media: "subject",
		MedicationAdministration: "patient",
		MedicationDispense: "subject",
		MedicationRequest: "subject",
		MedicationStatement: "subject",
		NutritionOrder: "patient",
		Observation: "subject",
		Patient: "_id",
		Person: "patient",
		Procedure: "patient",
		ProcedureRequest: "subject",
		Provenance: "patient",
		QuestionnaireResponse: "subject",
		ReferralRequest: "patient",
		RelatedPerson: "patient",
		RequestGroup: "subject",
		ResearchSubject: "individual",
		RiskAssessment: "subject",
		Schedule: "actor",
		Specimen: "subject",
		SupplyDelivery: "patient",
		SupplyRequest: "requester",
		VisionPrescription: "patient"
	},
	"r4": {

		// Resource	Inclusion Criteria
		"Account"                    : "subject",
		"AdverseEvent"               : "subject",
		"AllergyIntolerance"         : "patient", // or recorder or asserter
		"Appointment"                : "actor",
		"AppointmentResponse"        : "actor",
		"AuditEvent"                 : "patient",
		"Basic"                      : "patient", // or author
		"BodyStructure"              : "patient",
		"CarePlan"                   : "patient", // or performer
		"CareTeam"                   : "patient", // or participant
		"ChargeItem"                 : "subject",
		"Claim"                      : "patient", // or payee
		"ClaimResponse"              : "patient",
		"ClinicalImpression"         : "subject",
		"Communication"              : "subject", // or sender or recipient
		"CommunicationRequest"       : "subject", // or sender or recipient or requester
		"Composition"                : "subject", // or author or attester
		"Condition"                  : "patient", // or asserter
		"Consent"                    : "patient",
		"Coverage"                   : "policy-holder", // or subscriber or beneficiary or payor
		"CoverageEligibilityRequest" : "patient",
		"CoverageEligibilityResponse": "patient",
		"DetectedIssue"              : "patient",
		"DeviceRequest"              : "subject", // or performer
		"DeviceUseStatement"         : "subject",
		"DiagnosticReport"           : "subject",
		"DocumentManifest"           : "subject", // or author or recipient
		"DocumentReference"          : "subject", // or author
		"Encounter"                  : "patient",
		"EnrollmentRequest"          : "subject",
		"EpisodeOfCare"              : "patient",
		"ExplanationOfBenefit"       : "patient", // or payee
		"FamilyMemberHistory"        : "patient",
		"Flag"                       : "patient",
		"Goal"                       : "patient",
		"Group"                      : "member",
		"ImagingStudy"               : "patient",
		"Immunization"               : "patient",
		"ImmunizationEvaluation"     : "patient",
		"ImmunizationRecommendation" : "patient",
		"Invoice"                    : "subject", // or patient or recipient
		"List"                       : "subject", // or source
		"MeasureReport"              : "patient",
		"Media"                      : "subject",
		"MedicationAdministration"   : "patient", // or performer or subject
		"MedicationDispense"         : "subject", // or patient or receiver
		"MedicationRequest"          : "subject",
		"MedicationStatement"        : "subject",
		"MolecularSequence"          : "patient",
		"NutritionOrder"             : "patient",
		"Observation"                : "subject", // or performer
		"Patient"                    : "link",
		"Person"                     : "patient",
		"Procedure"                  : "patient", // or performer
		"Provenance"                 : "patient",
		"QuestionnaireResponse"      : "subject", // or author
		"RelatedPerson"              : "patient",
		"RequestGroup"               : "subject", // or participant
		"ResearchSubject"            : "individual",
		"RiskAssessment"             : "subject",
		"Schedule"                   : "actor",
		"ServiceRequest"             : "subject", // or performer
		"Specimen"                   : "subject",
		"SupplyDelivery"             : "patient",
		"SupplyRequest"              : "subject",
		"VisionPrescription"         : "patient"
	}
};

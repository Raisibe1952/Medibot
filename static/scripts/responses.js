function getBotResponse(input) {
    //FAQS of Medi-pharmacy
    if (input == "How may I contact you?") {
        return "Please contact Medi-Pharmacy via the following channel: Email:Medi-Pharmacy@info.co.za or WhatsApp us at: 079 245 3453";
    } else if (input == "Where is your store located?") {
        return "Ground floor, Platinum House, 23 Joseph street, Polokwane";
    } else if (input == "I have pain, which pills can I take?") {
        return "Please choose from the options: 1.Panado, 2.Compral, 3.Nurofen";
    } else if (input == "Panado") {
        return "It is available, please continue to shop Panado on our website."
    }
    

    // Simple responses
if (input == "Which contraceptives do you have?") {
    return "Please choose from the options: 1.ginette35, 2.OralCon"
}else if (input == "OralCon") {
    return "It is available, please continue to shop OralCon on our website."
}else if (input == "Which medication do you have for gastric acid?") {
    return "Please choose from the options: 1.Rennie, 2.ABCO-MAYOGEL"
}else if (input == "Rennie") {
    return "It is available, please continue to shop Rennie on our website."
}else if (input == "I want to boost my immune system") {
    return  "Please choose from the options: 1.Vital, 2.Berocca"
}else if (input == "Vital") {
    return "It is available, please continue to shop Vital on our website."
}else if (input == "Yeast infection") {
    return "CanexV"
}else if (input == "Can I vaccinate in store?") {
    return "Yes, please book on our website"
}else if (input == "Cough and cold") {
    return "Acc 200"
}else if (input == "Thank you") {
    return "Thank You. Please continue to shop and enjoy the rest of your day"
    } else {
        return "Try asking something else!";
    }
}
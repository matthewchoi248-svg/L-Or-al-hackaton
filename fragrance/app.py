from flask import Flask, render_template, request, jsonify
from recommender import FragranceRecommender
import pandas as pd

app = Flask(__name__)

recommender = FragranceRecommender("C:/fragrance/fragranceData.csv")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/submit-questionnaire", methods=["POST"])
def submit_questionnaire():
    data = request.get_json()

    print("Received questionnaire data:")
    print(data)

    user_response = extract_user_responses(data)

    print("Extracted user_response:")
    print(user_response)

    recommendations = recommender.recommend(user_response)

    # Replace NaN with None
    recommendations = recommendations.where(pd.notna(recommendations), None)

    recommendations = recommendations[["Name", "score"]]

    recommendation_records = recommendations.to_dict(orient="records")

    top_perfumes = recommendations.head(3)["Name"].tolist()

    return jsonify({
        "status": "success",
        "message": "Responses saved and dataframe scored successfully.",
        "user_response": user_response,
        "recommendations": top_perfumes
    })

def extract_user_responses(data):
    user_response = []

    for item in data.get("textResponses", []):
        user_response.extend(item.get("selectedOptions", []))

    for item in data.get("imageResponses", []):
        selected = item.get("selectedOption")
        if selected:
            user_response.append(selected)

    for item in data.get("videoResponses", []):
        selected = item.get("selectedOption")
        if selected:
            user_response.append(selected)

    return user_response

if __name__ == "__main__":
    app.run(debug=True)
import json
import os

# Get the directory path of the current script
current_dir = os.path.dirname(__file__)

# Construct the path to the careers.json file
careers_json_path = os.path.join(current_dir, '..', 'data', 'careers.json')

# Load the career dataset from JSON
with open(careers_json_path, 'r') as file:
    careers_data = json.load(file)

# Single user input scenario
# Modified user input scenario
user_response = {
    "interests": {
        "mathematics": 1,  # Not interested at all
        "teamwork": 4,  # Thrive in team settings
        "creative_activities": 5,  # Extremely interested
        "understanding_human_behavior": 3,  # Moderately interested
    },
    "strengths": {
        "rate_strengths": 3,  # Average
        "handle_challenges": 4,  # Effectively
        "rate_accomplishment": 4,  # Very effective
    },
    "values": {
        "motivation": 4,  # Very motivated
        "work_life_balance": 5,  # Extremely important
        "work_values": 5,  # Extremely important
        "financial_stability": 4,  # Very important
    }
}


# Calculate scores and recommend a career based on the user's input
career_scores = {}
for career in careers_data:
    score = 0
    for category, responses in user_response.items():
        for key, user_value in responses.items():
            career_value = career.get(category, {}).get(key, 3)  # Default to 3 (Moderate) if not found
            score += abs(career_value - user_value)
    career_scores[career["name"]] = score

# Find the career with the lowest score (closest match to user responses)
recommended_career = min(career_scores, key=career_scores.get)


print(f"Recommended Career: {recommended_career}")

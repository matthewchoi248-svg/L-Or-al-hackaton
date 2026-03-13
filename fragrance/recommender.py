import pandas as pd

class FragranceRecommender:

    def __init__(self, csv_path):
        self.df = pd.read_csv(csv_path)

    def recommend(self, userResponse):
        fragrancedf = self.df.copy()

        if not userResponse:
            print("userResponse is empty or None")
            return fragrancedf

        userResponse = [str(x).lower() for x in userResponse]

        chara_columns = [f"Chara{i}" for i in range(1, 9)]

        fragrancedf["score"] = 0

        for index, row in fragrancedf.iterrows():
            row_chars = [
                str(row[col]).lower()
                for col in chara_columns
                if col in fragrancedf.columns and pd.notna(row[col])
            ]

            for element in userResponse:
                if any(element in char for char in row_chars):
                    fragrancedf.at[index, "score"] += 1

        fragrancedf = fragrancedf.sort_values(by="score", ascending=False)

        print("Scored dataframe generated successfully")
        print(fragrancedf[["score"]].head())

        return fragrancedf
from recommender import FragranceRecommender

recommender = FragranceRecommender("C:/fragrance/fragranceData.csv")

userResponse = ["fresh", "citrus"]

result = recommender.recommend(userResponse)

print(result)
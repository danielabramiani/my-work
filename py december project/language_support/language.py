import random
vocabulary = {
    "apple": "a fruit",
    "dog": "an animal that barks",
    "cat": "a small domesticated carnivorous mammal",
    "book": "a written or printed work consisting of pages glued or sewn together along one side",
    "sun": "the star around which the earth orbits",
    "moon": "the natural satellite of the earth",
    "tree": "a woody perennial plant",
    "ocean": "a large body of salt water",
    "computer": "an electronic device for storing and processing data",
    "music": "vocal or instrumental sounds combined to produce beauty of form",
}
grammar_exercise = [
    {"question": "He ___ to the store every day.", "answer": "goes"},
    {"question": "They ___ in the park yesterday.", "answer": "played"},
    {"question": "She ___ a song beautifully.", "answer": "sings"},
    {"question": "I ___ my homework yesterday.", "answer": "did"},
]
def vocabulary_quiz():
    print("Vocabulary Quiz")
    score = 0
    quiz_items = list(vocabulary)
    random.shuffle(quiz_items)

    for i in quiz_items:
        definition = vocabulary[i] 
        answer = input(f"what does {i} mean? Enter yout answer: ")
        if answer == definition:
            print("Good job correct")
            score +=1
        else:
            print(f"maybe in the next time you will be correct because answer was {definition}")
    
    print(f"Your final score is {score}/{len(vocabulary)}")

def grammar_quiz():
    print("Grammar Quiz")
    score = 0
    for i in grammar_exercise:
        user_answer = input(i["question"] + " ")
        if user_answer.strip().lower() == i["answer"].lower():
            print("Good job correct")
            score +=1
        else:
            print(f"maybe in the next time you will be correct because answer was {i['answer']}")

    print(f"Your final score is {score}/{len(grammar_exercise)}")

def main():
    print("AI Bot who will assist you in the english")
    print("1.vocabulary")
    print("2.Grammar")
    print("3.Exit")

    choose = input("Enter your choose: ")
    if choose == "1":
        print(vocabulary_quiz())
    elif choose == "2":
        print(grammar_quiz())
    elif choose == "3":
        print("Bye  bye")
    else:
        print("no valid number")
main()
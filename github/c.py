import os

def find_empty_files(directory):
    empty_files_count = 0
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            if os.path.getsize(file_path) == 0:
                print(f"ცარიელი: {file_path}")
                empty_files_count += 1

    print(f"ცარიელი ფაილების ჯამი: {empty_files_count}")

find_empty_files("Hello") #შეცვალე მოსწავლის რეპოზიტორიის სახელით.
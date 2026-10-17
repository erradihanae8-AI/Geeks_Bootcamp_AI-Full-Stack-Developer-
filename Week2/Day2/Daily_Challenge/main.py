
from text_analyzer import TextAnalyzer

text = "Python is fun and Python is powerful"

analyzer = TextAnalyzer(text)

print(analyzer)
print(len(analyzer))
print(analyzer.word_count())
print(analyzer.count_word("Python"))

# Test exceptions
try:
    empty_analyzer = TextAnalyzer("")
except Exception as e:
    print("Error:", e)

try:
    analyzer.count_word("")
except Exception as e:
    print("Error:", e)

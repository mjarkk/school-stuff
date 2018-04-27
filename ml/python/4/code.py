from sklearn import datasets
iris = datasets.load_iris()

X = iris.data
Y = iris.target

from sklearn.cross_validation import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.5)

# basic classifier
# from sklearn import tree
# my_classifiel = tree.DecisionTreeClassifier()

# other classifier
from sklearn.neighbors import KNeighborsClassifier
my_classifiel = KNeighborsClassifier()

my_classifiel.fit(X_train, Y_train)

predictions = my_classifiel.predict(X_test)

from sklearn.metrics import accuracy_score
print (accuracy_score(Y_test, predictions))
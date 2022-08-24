
# closure

def names(name):
    def greeting(greet):
        return greet + name 

    return greeting

greets = names("Shreya")
print(greets("Hello "))


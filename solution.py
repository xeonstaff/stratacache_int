# assumes input of list of integers
listA = [1, 2, 3]
listB = [1, 4, 5, 6, 21, 34, 3, 27, 32]
listC = [100, -100, 0, 1000]

def convertit (arry):
    newarry=[]
    for num in arry:
        if num % 2 == 0:
            newarry.append(arry[(arry.index[num])+1]*arry[(arry.index[num])-1])
        elif num % 2 ==1:
            newarry.append(arry[(arry.index[num])+1]+arry[(arry.index[num])-1])
    return newarry

print(convertit(listA))
    

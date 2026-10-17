def sum_numb():
    my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
    Total=0
    for n in my_list:
      try:
       
        Total +=n
      except TypeError:
        print("Error")
    return Total
sum_numbers=sum_numb()

print("Total is ",sum_numbers)   
            
            
         
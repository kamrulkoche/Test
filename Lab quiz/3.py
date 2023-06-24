
a=[10,20,30,40,50]

def kamrul(s):
   sum=0
   list=[]
   for i in s:
      sum=sum+i
      list.append(sum)
   return list

print(kamrul(a))

def sortposters(posters):
    times = [[],[],[]]

    for p in posters:
        title, name, time  = p.split("|")
        
        if (time == "7 tarde\n"):
            times[0].append((name,title))
        elif(time == "8 tarde\n"):
            times[1].append((name,title))
        else:
            times[2].append((name,title))

    return times

def printtimes(times):
    counter = 1
    for time in times:
        print(f"times {counter}")
        print(len(time))
        for t in time:
            print(f"<li> {t[0]}.{t[1]}</li>")
        counter = counter + 1
     

def main():
    f = open("posters.txt", "r", encoding="utf-8")
    posters = []
    for x in f:
          posters.append(x)

    times = sortposters(posters)

    printtimes(times)
main()

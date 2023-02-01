# Read from file, split on lines, separate each elf when there's a blank line

# Open the file in read mode ("r")
f = open("input.txt", "r")
# Get the contents of the file in a string
read_string = f.read()
# Split that string into an array of lines
lines = read_string.splitlines()
#print(lines)
# Create an empty array for storing summed calories
elves_array = []

# Create an int for storing this current elf's calories
calories = 0
for line in lines:
    #print(f'Line: {line}')
    if line != '':
        #print("Line was not empty")
        #print("Calories before:")
        #print(calories)
        calories = calories + int(line)
        #print("After:")
        #print(calories)

    else:
        #print("Detected new line")
        elves_array.append(calories)
        calories = 0
    #print("")
# Sort the array
elves_array.sort()
print(elves_array[len(elves_array) - 1])
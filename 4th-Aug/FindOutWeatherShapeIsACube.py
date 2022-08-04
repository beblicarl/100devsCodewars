#But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

#It's up to you to find out whether the cuboid has equal sides (= is a cube).

#Return true if the cuboid could have equal sides, return false otherwise.

#Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

#Note: the sides must be integers

#Parameter
#Numbers

#Result
#Boolean

#Example
#cube_checker(-12,2), False)
#cube_checker(8, 3),  False)
#cube_checker(8, 2),  True)
#cube_checker(-8,-2), False, "side or volume < 0 are invalid !")
#cube_checker(0, 0),  False)
#cube_checker(27, 3), True)
#cube_checker(1, 5),  False)

#Pseudocode
#To check if width and height have equal sides 
# To prevent ZeroDivisionError Check if side != 0 and Divide volume by length 
#If side is less than or equal to 0 or volume is less than or equal to 0 return False
#elif side is not equal to 0 and volume/side is not equal to side square return False
#else return True

#solution
def cube_checker(volume, side):
    if side != 0 :
        x = volume / side

    if side <= 0 or volume <= 0: 
        return False
    elif side != 0 and x != side **2 :
        return False
    else:
        return True

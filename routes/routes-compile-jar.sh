#!/bin/sh

# -----------------------------------------------------------------------------
# Display header
# -----------------------------------------------------------------------------

clear
echo
echo -------------------------------------------------
echo Compiling the Credersi-vend Admin Route Component
echo -------------------------------------------------
echo

# -----------------------------------------------------------------------------
# Confirm the Java Compilers exist
# -----------------------------------------------------------------------------

which javac > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo Java Class Compiler detected
else
    echo ERROR: Java Class Compiler not detected!
    echo
    echo Unable to detect the Java Class Compiler.
    echo Please ensure \"which javac\" succeeds first!
    echo
    exit 1
fi

which jar > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo Java Archive Compiler detected
else
    echo ERROR: Java Archive Compiler not detected!
    echo
    echo Unable to detect the Java Archive Compiler.
    echo Please ensure \"which jar\" succeeds first!
    echo
    exit 1
fi

# -----------------------------------------------------------------------------
# Ensure the dist folder exist
# -----------------------------------------------------------------------------

if [[ ! -d ./dist ]]; then
    echo Creating the dist folder
    mkdir ./dist
    echo
else
    echo The dist folder already exists
    echo
fi

# -----------------------------------------------------------------------------
# Compile java files to the target folder
# -----------------------------------------------------------------------------

echo Compiling java files
mkdir ./target
javac -cp "./lib/*" -d "./target" $(find ./src -name '*.java')

# -----------------------------------------------------------------------------
# Compile java classes to JAR and move to the dist folder
# -----------------------------------------------------------------------------

echo Compiling jar file
jar cmf ./src/VendRoutes.mf VendRoutes.jar -C target .
mv ./VendRoutes.jar ./dist

# -----------------------------------------------------------------------------
# Display footer
# -----------------------------------------------------------------------------

echo
echo -------------------------------------------------
echo Credersi-vend Admin Route Component Compile done!
echo -------------------------------------------------
echo

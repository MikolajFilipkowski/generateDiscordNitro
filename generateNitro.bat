echo off

:initial
if "%1"=="-n"  goto numberName
if "%1"=="--number" goto numberName
if "%1"=="-p" goto pathName
if "%1"=="--path" goto pathName
if "%1"=="" goto print
goto error

:numberName
shift
set numberName= --number=%1
goto lreturn

:pathName
shift
set pathName= --path=%1
goto lreturn


:lreturn
shift
call generateNitro.bat %1 %2 %3 %4
goto done

:error
echo %0 usage error
goto done

:print
call npm start%numberName%%pathName%
echo %~f0

:done
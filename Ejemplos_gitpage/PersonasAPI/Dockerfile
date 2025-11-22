FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["PersonasAPI.csproj", "."]
RUN dotnet restore "PersonasAPI.csproj"

COPY . .
RUN dotnet build "PersonasAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PersonasAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=publish /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "PersonasAPI.dll"]

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>
    {
        opt.Authority = builder.Configuration["IdentityServiceUrl"];
        opt.RequireHttpsMetadata = false;

        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["IdentityServiceUrl"],

            ValidateAudience = false,
            NameClaimType = "username",
        };
    });

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("customPolicy", b =>
    {
        b.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials()
        .WithOrigins(builder.Configuration["ClientApp"]);
    });
});

var app = builder.Build();

app.UseCors();

app.MapReverseProxy();

app.UseAuthentication();

app.UseAuthorization();

app.Run();

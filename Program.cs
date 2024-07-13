using Microsoft.EntityFrameworkCore;
using TestingASP;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IWishesSerivce, WishesService>();
builder.Services.AddDbContext<ContextDB>(options =>
     options.UseSqlServer(builder.Configuration.GetConnectionString("Wishes"))
);



builder.Services.AddCors(options =>
{
    options.AddPolicy("Access-Control-Allow-Origin",
                      policy =>
                      {
                          policy.WithOrigins("*");
                          policy.WithHeaders("*");
                          policy.WithMethods("*");
                          policy.WithExposedHeaders("*");
                      });
    options.AddPolicy("Access-Control-Allow-Headers",
                policy =>
                {

                    policy.AllowAnyMethod();
                    policy.AllowAnyOrigin();
                    policy.AllowAnyHeader();
                });
});

// services.AddResponseCaching();

builder.Services.AddControllers();

var app = builder.Build();

await using (var scoped = app.Services.CreateAsyncScope())
{
    using var context = scoped.ServiceProvider.GetRequiredService<ContextDB>();
    await context.Database.MigrateAsync();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors("Access-Control-Allow-Origin");
app.UseCors("Access-Control-Allow-Headers");

app.UseAuthorization();

app.MapControllers();

app.Run();
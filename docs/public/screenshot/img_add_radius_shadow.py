import os
from PIL import Image, ImageDraw, ImageFilter

def add_rounded_corners_with_shadow(image, corner_radius=40, shadow_blur=20, is_gif=False):
    # If it's a GIF, create a white background
    if is_gif:
        bg = Image.new('RGBA', image.size, (255, 255, 255, 255))
        image = Image.alpha_composite(bg, image)
    
    # Create a mask for rounded corners
    mask = Image.new('L', image.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), image.size], corner_radius, fill=255)
    
    # Apply the mask to the original image
    output = Image.new('RGBA', image.size, (0, 0, 0, 0))
    output.paste(image, (0, 0), mask)
    
    # Create dual shadow effect similar to Tailwind CSS
    shadow_size = (image.width + shadow_blur * 4, image.height + shadow_blur * 4)
    shadow = Image.new('RGBA', shadow_size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    
    # First shadow (larger, lighter)
    shadow_draw.rounded_rectangle([(shadow_blur * 2, shadow_blur * 2), 
                                   (shadow_size[0] - shadow_blur * 2, shadow_size[1] - shadow_blur * 2)],
                                  corner_radius, fill=(0, 0, 0, 25))
    shadow = shadow.filter(ImageFilter.GaussianBlur(shadow_blur))
    
    # Second shadow (smaller, darker)
    shadow_draw.rounded_rectangle([(shadow_blur * 2.5, shadow_blur * 2.5), 
                                   (shadow_size[0] - shadow_blur * 2.5, shadow_size[1] - shadow_blur * 2.5)],
                                  corner_radius, fill=(0, 0, 0, 50))
    shadow = shadow.filter(ImageFilter.GaussianBlur(shadow_blur // 2))
    
    # Create final image with shadow
    result = Image.new('RGBA', shadow_size, (0, 0, 0, 0))
    result.paste(shadow, (0, 0))
    result.paste(output, (shadow_blur * 2, shadow_blur * 2), mask)
    return result

def process_images_in_folder(folder_path):
    output_folder = os.path.join(folder_path, 'output')
    os.makedirs(output_folder, exist_ok=True)
    
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            file_path = os.path.join(folder_path, filename)
            with Image.open(file_path) as img:
                is_gif = filename.lower().endswith('.gif')
                if is_gif:
                    frames = []
                    for frame in range(0, getattr(img, 'n_frames', 1)):
                        img.seek(frame)
                        frame_img = img.convert('RGBA')
                        processed_frame = add_rounded_corners_with_shadow(frame_img, is_gif=True)
                        frames.append(processed_frame)
                    output_path = os.path.join(output_folder, filename)
                    frames[0].save(output_path, save_all=True, append_images=frames[1:], loop=0, duration=img.info['duration'], disposal=2)
                else:
                    if img.mode != 'RGBA':
                        img = img.convert('RGBA')
                    processed_img = add_rounded_corners_with_shadow(img, is_gif=False)
                    output_path = os.path.join(output_folder, filename)
                    processed_img.save(output_path)
                print(f"Processed: {filename}")

# Usage
current_folder = os.path.dirname(os.path.abspath(__file__))
process_images_in_folder(current_folder)
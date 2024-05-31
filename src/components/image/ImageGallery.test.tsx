import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import ImageGallery from "./ImageGallery.tsx";
import "@testing-library/jest-dom"

describe("imageGallery", () => {
    it('should not render image list if not image given', () => {
        const {container} = render(<ImageGallery images={[]} />)
        expect(container).toBeEmptyDOMElement();
    });

    it('should render image list when images are provided', () => {
        const imagesList: string[] = [`https://source.unsplash.com/random/300x200?sig=${Math.random()}`, `https://source.unsplash.com/random/300x200?sig=${Math.random()}`]
        render(<ImageGallery images={imagesList} />)
        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(imagesList.length)
        imagesList.forEach((_img: string, index: number) => {
            expect(images[index]).toHaveAttribute('src', imagesList[index])
        })
    });

    // another way to test image list render
    // it('should render image list when images are provided', () => {
    //     const images = ['image1.jpg', 'image2.jpg'];
    //     const {container} = render(<ImageGallery images={images} />);
    //     const imageList = container.querySelectorAll('.image');
    //     expect(imageList).toHaveLength(images.length);
    // });
})